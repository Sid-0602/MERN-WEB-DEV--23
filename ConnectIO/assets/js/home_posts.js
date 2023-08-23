{   
    //method to submit form data for new post using ajax: 
    let createPost = function(){
        let newPostForm = $('#new-post-form');
        newPostForm.submit(function(e){
            e.preventDefault(); 

            $.ajax({
                type: 'post',
                url: '/posts/create',
                data: newPostForm.serialize(),
                success: function(data){
                    let newPost = newPostDom(data.data.post);
                    //prepend it to list: 
                    $('#post-list-container>ul').prepend(newPost);
                    console.log(data);
                }, error: function(error){
                    console.log(error.responseText);
                }
            })
        });
    }

    //method to create a post in DOM

    let newPostDom = function(post){
        return $(`
        <li id="post- ${post._id}">
            <h3>        
                        ${post.content}
                        <small>Author: ${ post.user.name }  </small>
                        <small> | 
                                <a href="/posts/destroy/${post._id}" class="delete-post-button">DEL</a>
                        </small>
            </h3>

            <div class="post-comments">
                        <form action="/comments/create" method="POST">
                            <input type="text" name="content" placeholder="Type here to add comment..." required>
                            <input type="hidden" name="post" value="${ post._id }" >
                            <input type="submit" value="Add Comment">
                        </form>
            </div>

            <div class="post-comments-list">
                    <ol id="post-comments- ${post._id}">
                    </ol>
                </div>
        </li>
        `)
    }
    createPost();
}