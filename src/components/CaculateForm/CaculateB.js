import { Button, Form, Input, InputNumber, Select } from 'antd';
import React, { Fragment } from 'react'
import './Caculate.css'
// import React, { useState } from 'react';
const { Option } = Select;


// const PriceInput = ({ value = {}, onChange }) => { //构造价格输入函数
//   const [number, setNumber] = useState(0); //申明一个变量number 初始数字等于0 
//   const [currency, setCurrency] = useState('rmb');//定义一个变量currency 默认属性dollar1
  
//   const triggerChange = (changedValue) => { //构建触发改变函数
//     onChange?.({ //可以改变的变量为以下四个
//       number,
//       currency,
//       ...value,
//       ...changedValue,
//     });
//   };

//   const onNumberChange = (e) => {   //构建数字可变更时间 参数为e 触发事件时指向参数e??
//    const newNumber = parseInt(e.target.value || '0', 10); //定义变量newNumber 
//     if (!('number' in value)) {
//       setNumber(newNumber);
//     }

//     triggerChange({
//       number: newNumber,
//     });
//   };


//   const onCurrencyChange = (newCurrency) => { //构建可以更改设计类型的函数
//     if (!('currency' in value)) {
//       setCurrency(newCurrency);
//     }
//     triggerChange({
//       currency: newCurrency,
//     });
//   };


//   return (   //第一个设计费用输入栏
//     <span>
//       <Input  type="text" value={value.number || number} onChange={onNumberChange}
//         style={{
//           width: 100,
//           margin: '0 8px',
//         }}
//       />

const onChange = (value) => {
  console.log(`selected ${value}`);
};

  
      
//       = <InputNumber type="text" value={value.number || number} onChange = {setNumber} //第二个输出栏
//         style={{
//           width: 400,
//         }}
//       />
//         {/* <InputNumber type="text" value={number} onChange = {setNumber} //
//         style={{
//           width: 400,
//         }}
//       /> */}
//         <Button type="primary" value = {number} onClick={() => {setNumber()}}>  
//         计算
//         </Button>
//     </span>
//   );
// };

// //判断警告语句
// const App = () => {
//   const onFinish = (values) => {
//     console.log('Received values from form: ', values);
//   };

//   const checkPrice = (_, value) => {
//     if (value.number > 0) {
//       return Promise.resolve();
//     }
//     return Promise.reject(new Error('费用必须大于0'));
//   };

//   return (
//     <Form
//       name="customized_form_controls"
//       layout="inline"
//       onFinish={onFinish}
//       //初始化数据和值
//       initialValues={{
//         price: {
//           number: 0,
//           currency: 'dollar1',
//         },
//       }}
//     >

//       <Form.Item
//         name="price"
//         label="设计费用（元）"
//         rules={[
//           {
//             validator: checkPrice,
//           },
//         ]}
//       >
//       <PriceInput />
//       </Form.Item>
//     </Form>
//   );
// };

// export default App;





const Component = React.Component
class App extends Component{
  
    //构造函数
    constructor(props){
        //      
        super(props)
        this.state = {
            //定义变量 这是数据            
            number1:0,
            number2:0,
            sum:0,
            sum1:0,
            sum2:0,
            sum3:0,
            sum4:0,
            sum5:0,
            sum6:0,
            sum7:0,
        }
    }
    render(){
        return(//框架
            <Form.Item
            name="price"
            label="项目总设计费用（元）">

            <div className='zhonglei'>
            <Select
            style={{
            width: 300,
            margin: '0 8px',
            }}
            placeholder="选择一种设计类型"
            onChange={onChange}
            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
            >

            <Option onClick={this.add2.bind(this)}>BIM设计</Option>
            <Option value="dollar">工程项目装配式</Option>
            <Option value="dollar1">海绵城市设计</Option>
            <Option value="dollar2">老旧小区改造</Option>
            <Option value="dollar3">内装设计</Option>
            <Option value="dollar4">智能化设计</Option>
            <Option value="dollar6">中央空调设计</Option>
            <Option value="dollar5">住宅绿建设计</Option>
            </Select>
            </div>

            <div className='table'>
                <input value = {this.state.number1} onChange = {this.inputchange_num1.bind(this)}/><br />
                {/* <input value = {this.state.number2} onChange = {this.inputchange_num2.bind(this)}/><br /> */}
                设计组奖金 = <input value = {this.state.sum}/><br />
                施工图奖金 = <input value = {this.state.sum1}/><br />
                建筑 = <input value = {this.state.sum2}/><br />
                结构 =<input value = {this.state.sum3}/><br />
                给排水=<input value = {this.state.sum4}/><br />
                电气 = <input value = {this.state.sum5}/><br />
                暖通 = <input value = {this.state.sum6}/><br />
                估算 = <input value = {this.state.sum7}/><br />
            </div> 
            
            <div>
                <Button type="primary" onClick={this.add2.bind(this)}>BIM设计奖金计算</Button>
                <Button type="primary" onClick={this.add3.bind(this)}>工程项目装配式</Button>
                <Button type="primary" onClick={this.add2.bind(this)}>BIM计算</Button>
                <Button type="primary" onClick={this.add2.bind(this)}>BIM计算</Button>
                <Button type="primary" onClick={this.add2.bind(this)}>BIM计算</Button>
            </div> 
            <div></div>
            </Form.Item>     
          
        )     
    }
    inputchange_num1(e){
        this.setState({
            number1: e.target.value
        })           
    }
    inputchange_num2(e){
        this.setState({
            number2: e.target.value
        })           
    }
    //计算规则 bim
    add2(BIM设计){
        var a = parseFloat(this.state.number1) //设计费用
        // var b = parseFloat(this.state.number2) 
        var c = a*1.5*0.6 //设计组奖金
        var d = a*1.5*0.4//施工图设计奖金
        var e = a*1.5*0.6*0.3//建筑
        var f = a*1.5*0.6*0.14//结构
        var g = a*1.5*0.6*0.18//给排水
        var h = a*1.5*0.6*0.2//电气
        var i = a*1.5*0.6*0.18//暖通
        this.setState({
          sum: c
        })    
        this.setState({
          sum1: d
        })
        this.setState({
          sum2: e
        })       
        this.setState({
          sum3: f
        })       
        this.setState({
          sum4: g
        })               
        this.setState({
          sum5: h
        })        
        this.setState({
          sum6: i
        })        
        this.setState({
          sum7: f
        })        
    }

    add3(工程项目装配式){
      var a = parseFloat(this.state.number1) //设计费用
      var c = a*1.5*0.4 //设计组奖金
      var d = a*1.5*0.6//施工图设计奖金
      var e = a*1.5*0.6*0.25//建筑
      var f = a*1.5*0.6*0.5//结构
      var g = a*1.5*0.6*0.05//给排水
      var h = a*1.5*0.6*0.15//电气
      var i = a*1.5*0.6*0.05//暖通
      this.setState({
        sum: c
      })    
      this.setState({
        sum1: d
      })
      this.setState({
        sum2: e
      })       
      this.setState({
        sum3: f
      })       
      this.setState({
        sum4: g
      })               
      this.setState({
        sum5: h
      })        
      this.setState({
        sum6: i
      })        
      this.setState({
        sum7: f
      })        
  }
}






export default App
