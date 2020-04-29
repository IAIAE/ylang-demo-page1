import fromBase from '../../ylang-demo-base/src/outer'
const {React, antd, moment} = fromBase
const {Button} = antd;
let starttime = moment().unix()
console.info('the page1.chunk.js start exec at ', starttime)

const css = require('./index.less')

export type Props = {
    onClick: Function
    text?: string
}

export default class App extends React.Component<Props, any>{
    render(){
        return <div className={css.root} >
            <div>this is page1</div>
            <Button type="primary" onClick={_=>{
                this.props.onClick && this.props.onClick('hello from page1')
            }} >点击我</Button>
            {this.props.text && <div>this is from base: {this.props.text}</div>}
        </div>
    }
}