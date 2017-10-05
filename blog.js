var blogPostsRef = firebase.database().ref('blog');

blogPostsRef.orderByChild('number').on('child_added', function(snapshot) {
    
    var blogContainer = document.getElementById("blogcontainer");
    
    var blogPost = document.createElement("div");
    blogPost.id = "blogpost";

    var blogTitle = document.createElement("h2");
    blogTitle.innerHTML = snapshot.val().title;
    
    var blogDate = document.createElement("p");
    blogDate.id = "date"
    blogDate.innerHTML = "Posted " + snapshot.val().date;
    
    var blogOpener = document.createElement("p");
    blogOpener.innerHTML = snapshot.val().opener;
    
    var postLink = document.createElement("a");
    postLink.setAttribute("href", snapshot.val().link);
    postLink.innerHTML = "Read full post";
    
    blogPost.append(blogTitle);
    blogPost.append(blogDate);
    blogPost.append(blogOpener);
    blogPost.append(postLink);
    
    blogContainer.append(blogPost);
});