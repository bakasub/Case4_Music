    showAll();
    findAllcategory();
    find();
    function showAll() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/musics',
        success: (singers) => {
            let htmlMusics = ``;
            console.log(singers)
            for (let i = 0; i < singers.length; i++) {
                htmlMusics += `<div class="col-md-4 col-sm-6">
						<!-- featured item -->
						<div class="featured-item ">
							<!-- image container -->
							<div class="figure">
								<!-- image -->
								<img class="img-responsive" src="${singers[i].image}" style="width: 330px; height: 330px" />
								<!-- paragraph -->
							</div>
							<!-- featured information -->
							<div class="featured-item-info">
								<!-- featured title -->
								<h4>${singers[i].name}</h4>
								<!-- horizontal line -->
								<hr/>
								<!-- some responce from social medial or web likes -->
								
							</div>
						</div>
					</div>
                         `

            }
            $('#musics').html(htmlMusics);
        }
    })
}


   function findAllcategory() {
       $.ajax({
           type: 'GET',
           url: 'http://localhost:8080/categories',
           headers: {
               'Content-Type': 'application/json'
           },
           success: (chants) => {
               let htmlCategories = '';
               for (let i = 0; i < chants.length; i++) {
                   htmlCategories += `<option value="${chants[i]._id}" name="idSong">${chants[i].name}</option>`
               }
               console.log(chants)
               $('#idSong').html(htmlCategories);
           }
       })
   }

   let idEdit
   function getIdEdit(id) {
       idEdit = id
   }

   function resetFormCreate() {
       $('#name').val('');
       $('#band').val('')
       $('#description').val('');
       $('#image').val('');
       $('#idSong').val();
   }


   function find() {
       $.ajax({
           type: 'GET',
           url: 'http://localhost:8080/categories',
           headers: {
               'Content-Type': 'application/json'
           },
           success: (chants) => {
               let htmlCategories = '';
               for (let i = 0; i < chants.length; i++) {
                   htmlCategories += `<option value="${chants[i]._id}" name="idSongUpdate">${chants[i].name}</option>`
               }
               console.log(chants)
               $('#idSongUpdate').html(htmlCategories);
           }
       })
   }
