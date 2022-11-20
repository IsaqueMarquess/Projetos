/*Mapear as imagens; 
Criar uma galeria com elas;
*/

function enablePhotoUpload(){
    const imageInput = document.querySelector("#image-input")

    imageInput.addEventListener("change", function(){
        const reader = new FileReader()
        reader.addEventListener("load", ()=>{
            const uploadImage = reader.result

            document.querySelector("#display-image").style.backgroundImage = `url(${uploadImage})`
        })

        reader.readAsDataURL(this.files[0])
    })
}


async function mapImageList(){
 const memesObject = [
    {
        "name": "chloe",
        "path": "/DIO/pictures/Chloe-Meme-PNG.png"
    },
    {
        "name": "gato",
        "path": "/DIO/pictures/gato.jpg"
    },
    {
        "name": "gato 2",
        "path": "/DIO/pictures/gato 2.jpg"
    },
    {
        "name": "gato 3",
        "path": "/DIO/pictures/gato 3.jpg"
    },
]

 return memesObject

}

async function createGallery(imageList){
    const memeSelector = document.querySelector("#meme-list")
    
     imageList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)
    });
}

async function changeBackground(photo){
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url("${photo}")`
}

async function main(){
    const memesImageList = await mapImageList()

    enablePhotoUpload()
    await createGallery(memesImageList) 
    await changeBackground(memesImageList[0].path)
}

main()