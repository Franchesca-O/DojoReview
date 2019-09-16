function $Dojo(id){
this.id = GetElementById(id)
this.click(function(callback){
    this.id.addEventListener('click',callback)
});

this.hover(function(hoverin,hoverout){
    this.id.addEventListener("mouseover",hoverin);
    this.id.addEventListener("mouseout", hoverout)

})
return this;

}