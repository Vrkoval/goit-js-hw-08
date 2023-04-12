// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryElem=document.querySelector(".gallery");
function createGalleryItem(items) {
    return items
        .map(({preview,original,description})=>{
            return `<li class="gallery__item">
                        <a class="gallery__link" href="${preview}">
                            <img class="gallery__image"
                            src="${original}"
                            alt="${description}">
                        </a>
                    </li>`;
        })
        .join("");
    }
        const addGalleryItem = createGalleryItem(galleryItems);
        galleryElem.insertAdjacentHTML("beforeend", addGalleryItem);
        
        var lightbox= new SimpleLightbox('.gallery .gallery__link', {
            captionPosition: 'bottom',
            captionsData: 'alt',
            captionDelay: 250,
            close:false,
            enableKeyboard:true,
        }
        );
         
