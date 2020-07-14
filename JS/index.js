console.log('hi bro');

$(document).ready(function(){



    console.log('jQuery is working');


    $('#btn1').click(function() {
        if($('textarea').val().length > 0 && $('#tile').val().length > 0) {
            localStorage.setItem($('#tile').val(),$('textarea').val());
        }
    });
    

    });


    if(localStorage.length > 0){
        $('#note-title').html("My Notes");
    }


for (var i = 0; i < localStorage.length; i++) {

    // set iteration key name
    var key = localStorage.key(i);
  
    // use key name to retrieve the corresponding value
    var value = localStorage.getItem(key);
  
    // console.log the iteration key and value
    console.log(value);  


    $('.row').append(`
        <div class="col-12 col-sm-6 col-md-4">
            <div class="border mb-3 p-3 border-0 z-depth-2">
                <button id="${i}" type="button" onclick="delete_but(${i})" class="close" aria-label="Close">
                    <span aria-hidden="true" style="color:#ff6600">×</span>
                </button>
                <h2 class="text-left" style="font-family: Nyala">${key}</h1><hr>
                <h5 class="font-weight-bold" style="font-family: Papyrus">${value}</h5>
            </div>
        </div>
    `);


  
  }

function delete_but(k) {
    console.log(k);
    let key=localStorage.key(k);
    localStorage.removeItem(key);
    location.reload();
}


var images = ['bimg1.jpg','bimg2.jpg','bimg3.jpg','bimg4.jpg','bimg5.jpg','bimg6.jpg']
 $('#background').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});
