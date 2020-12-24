class Food
{
    constructor()
    {
        this.foodStock;
        this.fedTime;
        this.image = loadImage("Milk.png");
    }
    getFoodStock()
    {
        return this.foodStock;
    }
    updateFoodStock(foodStock)
    {
        this.foodStock = foodStock;
    }
    deductFoodStock()
    {
        if(this.foodStock > 0)
        {
            this.foodStock = this.foodStock-1;
        }
    }
    getFedTime(fedTime)
    {
        this.fedTime = fedTime;
    }
    bedroom(){
        background(b1,700,500)
    }
    washroom(){
        background(w1,700,500)
    }
     garden(){
        background(g1,700,500)
    }
    display()
    {
        var x =80;
        var y=10;
       
        
        if(this.foodStock!=0)
        {
            for(var i = 0;i<this.foodStock;i++)
            {
                if(i%15 == 0)
                {
                    x = 80;
                    y = y+60;
                }
                image(this.image,x,y,60,60);
                x=x+30;
            }
        }

    }
}