import React,{Component} from 'react';
import Table from './Table/Table';
import TaskForm from './Form/TaskForm';
import cryptoRandomString from 'crypto-random-string';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks :  [
                {
                    id : this.generateId(),
                    name:'Đỗ Quang Tài',
                    address:'Bắc Ninh',
                    email:'dqtai97@gmail.com',
                    status:true,
        
                },
                {
                    id : this.generateId(),
                    name:'Đỗ Quang Quân',
                    address:'Bắc Ninh',
                    email:'dqtai97@gmail.com',
                    status:true,
        
        
                },
                {
                    id : this.generateId(),
                    name:'Đỗ Quang Tú',
                    address:'Bắc Ninh',
                    email:'dqtai97@gmail.com',
                    status:true,
        
        
                },
                {
                    id : this.generateId(),
                    name:'Đỗ Quang Tỉnh',
                    address:'Bắc Ninh',
                    email:'dqtai97@gmail.com',
                    status:false,
        
        
                }],
            isDisplayFrom:false,
            taskEditing : null
        }
    }
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        if(localStorage && localStorage.getItem('tasks'))
        {
            var tasks =JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks:tasks
            })
        }
    }
    

    onToggleForm = () =>{
        //thêm task
        if(this.state.isDisplayFrom && this.state.taskEditing !== null)
        {
            this.setState({
                isDisplayFrom : true,
                taskEditing: null
            })
        }
        else{
            this.setState({
                isDisplayFrom : !this.state.isDisplayFrom,
                taskEditing: null
            })
        }
      
    }

    onCloseForm = () =>{
        this.setState({
            isDisplayFrom : false
        })
    }
    handleSumbit = data =>{
         var {tasks} = this.state;
         data.id = this.generateId();
         tasks.push(data);
         this.setState({
             tasks:tasks
         })
         localStorage.setItem('tasks',JSON.stringify(tasks));
    }

    generateId = () =>{
        var id = cryptoRandomString({length: 10, type: 'numeric'});
       return id;
    }
    onUpdateStatus = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        //console.log(index);
        if(index !== -1)
        {
            tasks[index].status = !tasks[index].status ;
            this.setState({
                tasks:tasks
            });
            
                localStorage.setItem('tasks',JSON.stringify(tasks))
        }
        this.onCloseForm();
    }
    findIndex = (id) => {
        var {tasks} = this.state;
        var result = -1;
        tasks.forEach((task, index) => {
            if(task.id === id)
            {
                 result = index;
            }  
        });
            return result;
    }
    onDelete = (id) =>{
        const {tasks} = this.state;
        const index = this.findIndex(id);
        if(index !== -1)
        {
            tasks.splice(index,1);
            this.setState({
                tasks:tasks
            });
            
            localStorage.setItem('tasks',JSON.stringify(tasks))
        }
    }

    onUpdate = (id) =>{
        var {tasks} = this.state;
        var index = this.findIndex(id);
        console.log(index);
        var taskEditing = tasks[index];
        this.setState({
            taskEditing : taskEditing
        });
        this.onShowForm();
        console.log(this.state.taskEditing);
    }

    onShowForm = () =>{
        this.setState({
            isDisplayFrom:true
        });
    }
    onUpdateData = (data) => {
        var {tasks} = this.state;
        var index = this.findIndex(data.id);
        tasks[index] =  data;

        this.setState({
            tasks:tasks
        });
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    render() { 
        var {tasks , isDisplayFrom,taskEditing} = this.state;
        var elmTaskForm = isDisplayFrom ? 
        <TaskForm 
            onCloseForm = {this.onCloseForm} 
            handleSumbit={this.handleSumbit}
            task={taskEditing}
            onUpdatedata = {this.onUpdateData}
        
        /> : '';
        return ( <div className="container">
            <div className="text-center">
                <h1>Quản lý người dùng</h1>
            </div>
            <div className="row">
                <div className={isDisplayFrom ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
                   {elmTaskForm }
                </div>
                <div className={isDisplayFrom ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                    
                    <div  style={{float:'left',margin:'10px'}}><button type="button" className="btn btn-primary btn-md" onClick={this.onToggleForm}>Thêm mới</button></div>
                    <br/>
                    <div>
                        <Table 
                        tasks = {tasks} 
                        onUpdateStatus={this.onUpdateStatus}
                        onDelete = {this.onDelete} 
                        onUpdate = {this.onUpdate}
                        />
                    </div>
                </div>
            </div>
     
        
   
    </div> );
    }
}
 
export default Home;
