export default class Game {
    private static instance: Game;

    //Singleton
    private constructor() { }

    // Check if instance already exists
    public static getInstance(){
        if( this.instance == null){
            this.instance = new Game();
        }
        return this.instance;
    }
}