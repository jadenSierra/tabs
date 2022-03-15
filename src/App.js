import Tabs from './components/Tabs';
import TabsDisplay from './components/TabsDisplay';
import React, {useState} from 'react';
import './App.css';

function App() {

  const [tabContent, setTabContent] = useState("");

  const updateContent = (tab) => {
    setTabContent(tab)
  }


  console.log(tabContent);

  const tabs = [
    {
    label: "Tab 1",
    content: "Tab 1 is showing here",
    clicked: false
    }, 
    {
      label: "Tab 2",
      content: "Tab 2 is showing here",
      clicked: false
    },
    {
      label: "Tab 3",
      content: "Tab 3 is showing here",
      clicked: false
    },
]



  return (
    <div className="App">
      <Tabs tabs={tabs} updateContent={updateContent} />
      <TabsDisplay tabContent={tabContent} />
    </div>
  );
}

export default App;
