class Declare{
  //implement here
  constructor(executor = () => {}){
    this.handlers =()=>{};
    this.state = 'pending';
    this.value = null;
    executor(this.resolve.bind(this))    
  }  
    resolve(value){
      if (this.state = 'pending'){
        this.value = value
        this.state = 'resolved'
        this.handlers(value)
      }
    }

    then(executor = ()=> {}){
      this.handlers = executor
      if (this.state === 'resolved') {
        return new Declare((resolveExecutor) => {
          resolveExecutor(executor(this.value))
          }) 
    } else return this;
  }
}
module.exports = Declare


