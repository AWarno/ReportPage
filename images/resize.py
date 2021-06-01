from PIL import Image     
import os

images = os.listdir('./')
img_left_area = (0, 0, 400, 300)


for img_name in images:
    if img_name.split('.')[-1] == 'png':
        img = Image.open(img_name)
        img = img.crop(img_left_area)
        print(img.size)
        img.save(f'{img_name.split(".")[0]}.png')
    

