import React, { Component } from 'react';
import TabItem from  './TabItem';

class Table extends Component {

    render() { 
        var {tasks} = this.props;
        var elmTasks = tasks.map((task,index) =>{
            return <TabItem 
            key={task.id} 
            index={index} 
            tasks={task} 
          
            onUpdateStatus = {this.props.onUpdateStatus}
            onDelete = {this.props.onDelete}
            onUpdate = {this.props.onUpdate}/>
        })

        return ( 
            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Họ tên</th>
                <th scope="col">Địa chỉ</th>
                <th scope="col">Email</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Thao tác</th>
                </tr>
            </thead>
            <tbody>
                    {elmTasks}
              
            </tbody>
            </table>
         );
    }
}
 
export default Table;