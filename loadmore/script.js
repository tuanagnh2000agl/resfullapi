var lessionPage = 1;
$(document).ready(function(){
    getLessons();

    $('.load-more-btn').click(function(){
        lessionPage++;
        getLessons(lessionPage);
    })
  
});

function getLessons(page){
    if(!page){
        page = 1;
    }
    $.ajax({
        type: 'GET',
        url: 'http://localhost/task13/wp-json/wp/v2/posts?per_page=5&page=' + page,
        dataType: 'json',
        success: function(data){
            if(data.length === 0){
                console.log(12);
                $('.load-more-btn').fadeOut();
            }
            renderData(data);
        }
    });
}

function renderData(data){
    let html = '';
    $.each( data, function(index, lession){
        html += `
            <li class="course_item">
                <h3 class="course-title">${lession.title.rendered}</h3>
                <p class="course-desc">${lession.excerpt.rendered}</p>
                <p class="created-from-now">${lession.date}</p>
            </li>
        `
    });
    $('.courses-item').append(html);
}