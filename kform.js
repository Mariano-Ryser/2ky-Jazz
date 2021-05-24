function getInputText(selector) { 
    var element = document.querySelector(selector);

    if (element) {
        log(selector, element.value);
        return element.value;
    }
    else {
        alert("Input element '" + selector + "' could not be found.");
        return "";
    }
}

function log(label, value) {
    console.log(label + ': ' + value);
}
/* Dear Coaches, some how i can"t get it ;)*/ 

<!doctype html>
<html lang="en">
  <head>
    <title>Mock Up</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=l, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="index5.css">
  </head>
  <body>
    <!--navi spot-->
    <div class="container-fluid">  </div>

      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4 photo">
          <!--vertical picture -->
          <img src="https://images.pexels.com/photos/5650687/pexels-photo-5650687.jpeg">
        </div> 
        <!--right side-->
        <div class="col-sm-8 learning">
          <h1>Learning to Jazz</h1>
            <p>Another advantage of being our member.
              We offer developmental activities for your children. 
              It's a great way to share your passion with your children. 
              Two days a week, a great choice and a convenient time. 
              Plus, we are open to new proposals and suggestions.
            </p>
          <div class="row"><!---do img buttons linkto contact, make them bigger-->
            <div class="col-md-6 day saturday";>
              <h2>Saturday</h2>
              <br>
              <div class="col block piano";>
                <img src="https://images.pexels.com/photos/2927080/pexels-photo-2927080.jpeg">  
              </div> 
              <div class="col block saxophone">  
                <img src="https://www.liveabout.com/thmb/ryZKFSDHQzSfRB2ijwDWw4XMFEU=/3435x2576/smart/filters:no_upscale()/man-playing-the-saxophone-172572906-583ccadd5f9b58d5b1de546f.jpg ">
              </div>
              <div class="col block doublebass">
                <img src="https://cdn.wallpapersafari.com/94/94/9RWCdS.jpg">  
              </div>
            </div>
            <div class="col-md-6 day sunday";>
              <h2>Sunday</h2>
              <br>
                <div class="block drums">
                  <img src="https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg ">  
                </div>
                <div class="block guitar">
                  <img src="https://images.pexels.com/photos/6270137/pexels-photo-6270137.jpeg">  
                </div>
                <div class="block singing">
                  <img src="https://i.pinimg.com/originals/a6/05/85/a605854e7e74700932ccd2537a9d15bf.jpg">  
                </div> 
            </div>
            <!--logo-->
            <div class="col-12 justify-content-center py-3"><img src="/LogoMakr-5h3Zc0.png"></div>
          </div>
          <!--comment field-->
          <div class="container-fluid">
            <form> 
                <div class="form-col-md-4">
                    <div class="form-group col-md-4">
                        <label for="inputName"><p>Name</p></label>
                        <input type="text" class="form-control" id="inputName" placeholder="N...">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputSurname"><p>Surname</p></label>
                        <input type="text" class="form-control" id="inpuSurname" placeholder="S...">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputEmail"><p>Email</p></label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelpId" placeholder="example@help.com">
                    </div>
                </div>
                <div class="form-group col-md-4">
                    <label for="inputLesson"><p>Lesson</p></label>
                        <select id="inputLesson" class="form-control">
                            <option selected="">Select</option>
                            <option>Piano</option>
                            <option>Saxophone</option>
                            <option>Double Bass</option>
                            <option>Drums</option>
                            <option>Guitar</option>
                            <option>Singing</option>
                        </select> 
                    <div class="form-group">  
                    <label for="inputEmail">Comment</label>     
                    <textarea name="Comment" id="" cols="30" rows="10" class="form-text text-muted form-control">
                    Enter text here...</textarea>
                  </div>
                </div>
            </form>
            <button onclick="validateFormFields();">Submit</button>
          </div>       
        </div>
      </div>
      
     
    <!--footer-->
    <div class="container-fluid">
      
    </div>


    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>