import React,{Component} from 'react';

class TabItem extends Component {

  onUpdateStatus = () => {
   
  
        this.props.onUpdateStatus(this.props.tasks.id);
  }
  onDelete = () => {
    this.props.onDelete(this.props.tasks.id);
  }

  onUpdate = () =>{
    this.props.onUpdate(this.props.tasks.id);
  }
    render() { 

        var {tasks, index} = this.props;
        return (    
            <tr>
            <th scope="row">{index+1}</th>
            <td>{tasks.name}</td>
            <td>{tasks.address}</td>
            <td>{tasks.email}</td>

            <td className="text-center">
            <span 
            className={tasks.status === true ? 'label label-success ' :'label label-danger '}
            onClick={this.onUpdateStatus}
            > {tasks.status === true ? 'Kích hoạt' : 'Ẩn'}</span>
               </td>
            <td><button
             type="button"
             className="btn btn-primary"
             onClick = {this.onUpdate}
             >Sửa</button> &nbsp;  
            <button type="button" value={tasks.id} onClick={this.onDelete}   class="btn btn-danger">Xoá</button>
            </td>
            </tr>);
    }
}
 
export default TabItem;