import os
import json

# Apne main diwali folder ka path yahan daalein jiske andar ye sabhi sub-folders hain
base_folder = r"C:\Users\smart\OneDrive\Documents\GitHub\Empire-Catalog\images\DIWALI_ITEMS"
output_json = "diwali-categories.json"

allowed_extensions = ('.jpg', '.jpeg', '.png', '.webp')
categories_data = {}

if os.path.exists(base_folder):
    # Har sub-folder (category) ko loop karenge
    for folder_name in os.listdir(base_folder):
        folder_path = os.path.join(base_folder, folder_name)
        
        if os.path.isdir(folder_path):
            products = []
            for filename in sorted(os.listdir(folder_path)):
                if filename.lower().endswith(allowed_extensions):
                    name_without_ext = os.path.splitext(filename)[0]
                    products.append({
                        "code": name_without_ext,
                        "image": f"{folder_name}/{filename}"
                    })
            if products:
                categories_data[folder_name] = products

    with open(output_json, 'w', encoding='utf-8') as f:
        json.dump(categories_data, f, indent=4, ensure_ascii=False)
        
    print(f"Success! Categories and products data saved to {output_json}")
else:
    print("Base folder path galat hai, please check karein.")