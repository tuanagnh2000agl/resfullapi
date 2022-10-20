var users = [
    {
        id: 1,
        name: 'Kien Dam',
    },
    {
        id: 2,
        name: 'Son Dang',
    },
    {
        id: 3,
        name: 'Hung Dam',
    },
];

var comments = [
    {
        id: 1,
        user_id: 1,
        comment: 'Anh son chua ra video', 
    },
    {
        id: 2,
        user_id: 2,
        comment: 'Vua ra xong em oi', 
    },
    {
        id: 3,
        user_id: 1,
        comment: 'cam on anh', 
    }
]

// get user_id
function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments)
        }, 1000);
    })
}
// get users có chứa user_id
function getUsersByIds(userIds){
    return new Promise(function(resolve){
        var result = users.filter((user)=>{
            return userIds.includes(user.id);
        })
        setTimeout(()=>{
            resolve(result);
        }, 1000)
    })
}


getComments()
    .then(function(comments){
        var userIds = comments.map((comment)=>{
            return comment.user_id;
        });
        return getUsersByIds(userIds)
        .then((users)=>{
            return {
                users: users,
                comments: comments,
            };
        })
    })
    .then((data)=>{
        console.log(data);
        var commentBlock = document.querySelector('#comment-block');
        var html = '';
        data.comments.forEach(comment => {
            var user = data.users.find((user)=>{
                return user.id === comment.user_id;
            });
            console.log(user);
            html += `<li>${user.name} : ${comment.comment}</li>`;
            commentBlock.innerHTML = html;
        });
    })



