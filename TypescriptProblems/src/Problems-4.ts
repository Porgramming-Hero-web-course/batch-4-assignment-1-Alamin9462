// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

{
    type Rectangle = {
        shape: 'rectangle' ; 
        height: number;
        width: number;
    }
    
    type Circle = {
        shape: 'circle' ; 
        radius: number;
    }
    
    
    type Shape = Rectangle | Circle ;
    
    function calculateShapeArea(shape: Shape){
       if(shape.shape === 'rectangle'){
         return shape.height * shape.width ; // w*h formula
       }
    
       else if(shape.shape === 'circle'){
         return  3.1416 * shape.radius * shape.radius ;  // Πr*r formula  PI value call in Math.PI but I am use in directly 
       }
    }
     
    
    const RectangleClaculate = calculateShapeArea({shape:"rectangle", height: 10, width: 12});
    
    console.log(RectangleClaculate);
    
    
    const circleCalculate = calculateShapeArea({shape:"circle", radius: 20});
    
    console.log(calculateShapeArea);
}