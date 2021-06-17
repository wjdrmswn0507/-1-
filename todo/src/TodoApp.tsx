import React from "react";
import TodoItem from "./components/TodoItem";

interface TodoAppProps {}
interface TodoAppState {
  todoItems: string[];
  newTodo: string;
}

class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
  constructor(props: TodoAppProps) {
    super(props);
    
    this.state = {
      todoItems: [],
      newTodo: "",
    };
  }

  handleNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo: e.target.value,
    });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const items = this.state.todoItems.concat(this.state.newTodo)

    this.setState({
      todoItems: items,
      newTodo: "",
    })
  }

  render() {
    return (
      <div>
        <h3>[소전버거]</h3>
        <fieldset>
          <legend>^소전버거 상품목록^</legend>
          1. 불고기버거
          2. 치즈버거
          3. 파이썬버거
          4. C버거
          5. 디버거
          6. 자바버거
          7. CSS버거
          8. 타입스크립트버거
        </fieldset>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">추가할 상품을 적으세요</label> <br />
          <input type="text" id="new-todo" value={this.state.newTodo} onChange={this.handleNewTodo} /> <br />
          <button>추가 [현재 주문한 상품의 갯수:{this.state.todoItems.length}]</button>
        </form>
        <fieldset>
          <legend>[주문표]</legend>
          {
          this.state.todoItems.map((item, idx) => (
            <TodoItem name={item} key={idx}/>
          ))
          }
        </fieldset>
        []주문 내역[]<br/>
        {
          this.state.todoItems.map((item, idx) => (
            <TodoItem name={item} key={idx}/>
          ))
        }  
        ====================================<br/>
        {
          this.state.todoItems.map((item, idx) => (
            "주문이 +1건 접수되었습니다." 
          ))
        }
      </div>
    )
  }
}

export default TodoApp;