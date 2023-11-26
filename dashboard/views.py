from django.shortcuts import render,HttpResponse
import cv2
import numpy as np
import matplotlib.pyplot as plt
import json
# Create your views here.
hyu=0
def dashboard(request):
    texts=[]
    post=0
    if(request.method=="POST"):
        # for key, value in request.POST.items():
        for i in range(1,11):
            x=request.POST.get('textss['+str(i)+']')
            texts.append(x if x!=None else '' )
        post=1
        # for i in range(1,11):
        #     print(request.POST.get('diag'+str(i)))
    print(texts)
    width=int(8.27*96)
    height=int(11.69*96)
    whiteblankimage = np.ones((height, width, 3), np.uint8) * 255
    border=20
    borth=5
    pad=8
    box_height=int((height-(border*2+borth*2)-(pad*6))/5)
    box_width=int((width-(border*2+borth*2)-(pad*3))/2)
    sty=border+pad+borth
    for i in range(5):
        stx=border+pad+borth
        cv2.rectangle(whiteblankimage, pt1=(stx,sty), pt2=(stx+box_width,sty+box_height), color=(0,0,0), thickness=2)
        if(texts!=[]):
            text=texts[i*2]
            font = cv2.FONT_HERSHEY_SIMPLEX
            font_scale = 1
            font_thickness = 2
            text_size = cv2.getTextSize(text, font, font_scale, font_thickness)[0]
            text_position = ((box_width - text_size[0]) // 2 + stx, (box_height + text_size[1]) // 2 + sty)

            cv2.putText(whiteblankimage, text, text_position, font, font_scale, (0,0,0), font_thickness)
            
        stx+=pad+box_width
        cv2.rectangle(whiteblankimage, pt1=(stx,sty), pt2=(stx+box_width,sty+box_height), color=(0,0,0), thickness=2)
        if(texts!=[]):
            text=texts[i*2+1]
            font = cv2.FONT_HERSHEY_SIMPLEX
            font_scale = 1
            font_thickness = 2
            text_size = cv2.getTextSize(text, font, font_scale, font_thickness)[0]
            text_position = ((box_width - text_size[0]) // 2 + stx, (box_height + text_size[1]) // 2 + sty)

            cv2.putText(whiteblankimage, text, text_position, font, font_scale, (0,0,0), font_thickness)
        sty+=pad+box_height
    cv2.rectangle(whiteblankimage, pt1=(border,border), pt2=(width-border,height-border), color=(0,0,0), thickness=borth)
    # whiteblankimage = cv2.copyMakeBorder(whiteblankimage, 20, 20, 20, 20, cv2.BORDER_CONSTANT, value=[0, 0, 0])
    # plt.imread(whiteblankimage)
    # plt.show()
    global hyu
    hyu+=1
    
    if(post==1):
        cv2.imwrite('static/images/current_comic'+str(hyu)+'.jpg',whiteblankimage)
        return HttpResponse(json.dumps({'path':'static/images/current_comic'+str(hyu)+'.jpg'}))
    cv2.imwrite('static/images/current_comic.jpg',whiteblankimage)
    return render(request,'design.html')
