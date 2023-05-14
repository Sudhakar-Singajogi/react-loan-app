import React from 'react'
import { Tabs } from 'react-bootstrap'
import { Tab } from 'react-bootstrap';


function SILTabs(props) {
  const tabsArrr = props.params.tabs;
  console.log('tabs are:', tabsArrr);
  console.log(props.params.defaultKey);

  return (<Tabs
      defaultActiveKey={props.params.defaultKey}
      id="uncontrolled-tab-example"
      className="mb-3"
    >
       {        
        tabsArrr.map((tabItem, index) => <Tab key={"tab_"+index} eventKey={tabItem.eventKey} title={tabItem.title}> <tabItem.component /> </Tab> )
      } 
      
    </Tabs>
  )
}

export default SILTabs