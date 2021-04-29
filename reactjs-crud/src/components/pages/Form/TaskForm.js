import React, { Component } from 'react';

class TaskForm extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            id:'',
            name:'',
            address:'',
            email:'',
            status: true
        }
    }

    onCloseForm = () => {
       this.props.onCloseForm();
    }
    onChange = (event) =>{
        var {name, value} = event.target;
        if(name === 'status')
        {
            value = event.target.value === 'true' ? true : false;
        }
        this.setState({
            [name] :value,
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
      
        if(this.state.id !== '')
        {
            this.props.onUpdatedata(this.state);
         
        }
        else
        {
            this.props.handleSumbit(this.state);
        }
       
        this.onResetInput(event);
        this.onCloseForm();

    }

    onResetInput = () => {
       
        this.setState({
           name :'',
           email:'',
           address:'',
           status:true
        });
    }

  
    //bậT thẳng nút  sửa
    componentWillMount (prevProps,prevSate){
      
        console.log(this.props.task);
      if(this.props.task)
      {
          this.setState({
              id : this.props.task.id,
              name : this.props.task.name,
              address : this.props.task.address,
              email : this.props.task.email,
              status : this.props.task.status,
          })
      }
    }

    //khi bấm nút thêm mà bấm nút sửa cầN sử dụng 
    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.task)
        {
            this.setState({
                id : nextProps.task.id,
                name : nextProps.task.name,
                address : nextProps.task.address,
                email : nextProps.task.email,
                status : nextProps.task.status,
            })
        }else if(!nextProps.task)
        {
            this.setState({
                id:'',
                name :'',
                email:'',
                address:'',
                status:true
             });
        }
        
    }
    render() { 
         const { name,address,email,status } = this.state;
         var {id} = this.state;
        return ( 
            
            <div>
                <div className="panel panel-warning">
                    <div className="panel heading">
                        <h3 className="panel-title">
                          
                            {id !== ''  ? 'Cập nhật người dùng' : 'Thêm người dùng'}
                        </h3>
                    </div>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div >
                        <b for="exampleInputEmail1" class="form-label">Họ tên</b>
                        <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} id="name" aria-describedby="emailHelp"/>
                    
                    </div>
                    <div >
                        <b for="exampleInputPassword1" class="form-label">Địa chỉ</b>
                        <input type="text" class="form-control" name="address" id="address" value={address} onChange={this.onChange} />
                    </div>
                    <div >
                        <b for="exampleInputPassword1" class="form-label">Email</b>
                        <input type="text" class="form-control" name="email" id="email"  value={email} onChange={this.onChange}/>
                    </div>
                    <div >
                        <b for="exampleInputPassword1" class="form-label">Trạng thái</b>
                        <select
                            className="form-control"
                            name="status"
                            value={status}
                            onChange={this.onChange}
                            >
                            <option value={true}>Kích hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                    </div>
                    <br />
                    <div style={{textAlign: 'center'}}>
                    <button type="submit"  class="btn btn-primary">Lưu lại</button> &nbsp;
                    <button type="button" onClick={this.onCloseForm}  class="btn btn-danger">Huỷ bỏ</button>
                    </div>
              
                </form>
            </div>
         );
    }
}
 
export default TaskForm;