export class Point {
    
    
       
        constructor(private _x?: number, private _y?: number) {
        }
    
    
        draw() {
            console.log('X' + this._x + 'Y' + this._y);
    
        }
    
        getY() {
            return this._y;
        }
    
    
        get x():number {
            return this._x;
        }
    
        set x(value:number) {
            if (value < 0) {
                throw new Error('error');
            }
            this._x = value;
        }
    
    
        setY(value) {
            this._y = value;
        }
    
    
    }