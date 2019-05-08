import React, {Component} from 'react'


import CommentAdd from "../comment-add/commentAdd"
import CommentList from "../comment-list/commentList"

class App extends Component {

    constructor(props){
        super(props)
        this.state={
            comments:[
                {username:'Tom',content:'React挺好滴！'},
                {username:'Jack',content:'React太难了！'}
            ]
        }
    }

    addComment=(comment)=> {
        const {comments} = this.state
        comments.unshift(comment)
        this.setState({comments})
    }

    /**
     * splice 增加 删除 改
     * splice(index,1) 删除
     * splice(index,0,{})  增加
     * splice(index,1,{})  替换
     * @param index
     */
    deleteComment=(index)=>{
        const {comments} = this.state
        comments.splice(index,1)
        this.setState({comments})
    }


    render(){
        const {comments}=this.state

       return (
           <div>
             <header className="site-header jumbotron">
                 <div className="container">
                     <div className="row">
                         <div className="col-xs-12">
                             <h1>请发表对React的评论</h1>
                         </div>
                     </div>
                 </div>
             </header>

             <div className="container">
                 <CommentAdd addComment={this.addComment}/>
                 <CommentList comments={comments} deleteComment={this.deleteComment}/>
             </div>
           </div>
       )
    }
}

export  default  App