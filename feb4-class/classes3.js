class Post{
    constructor(title,image){
        this.title=title
        this.image=image
        this.views=0
    }
    increaseViewCount(){
        this.views=this.views+1
    }

    static display(){
        console.log("I'm a static method you cannot call me through an instance")
        //Static methods are owned by class itself cannot be invoked by instances
    }
}

const post1=new Post('Post1','image1.jpg')
post1.increaseViewCount()
post1.increaseViewCount()
post1.increaseViewCount()
console.log(post1)

const post2=new Post('Post2','image2.jpg')
post2.increaseViewCount()
post2.increaseViewCount()
console.log(post2)

Post.display()