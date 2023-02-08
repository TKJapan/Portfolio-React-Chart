import React, { useState } from 'react'
import { MyChart } from './MyChart'

const Input = () => {
  const [inputData, setInputData] = useState([0,0,0,0,0,0,0])

  const handleChange = (e) => {
    let updateData = [...inputData];
    updateData[e.target.name] = String(e.target.value);
    setInputData(updateData);
    console.log("updateData",updateData);
  }

  const labels = ['日本', 'アメリカ', 'イギリス', 'フランス', 'ドイツ', 'イタリア', 'カナダ'];

  return (
    <div>
      <h1>人口とGDP+a</h1>
      <label>数値を入力ください、下のグラフに反映されます。 </label>
      {labels.map((label, i) => (
        <div key={i}>
            <label>{label} </label>
            <input type="text" onChange={handleChange} name={i} value={inputData[i]} />
            </div>
      ))}
      <MyChart senddata = {inputData} />
      <div> 
        <p>※グラフが見やすくなるように人口とGDPの桁を調整しています。</p>    
        <p>※ピンクのグラフ:日本の人口は1億2500万人</p>
        <p>※オレンジのグラフ:日本のGDPは4,912兆ドル</p>
      </div>
    </div>
  )
}

export default Input
