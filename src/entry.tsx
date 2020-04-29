import '../../ylang-demo-base/node_modules/antd/dist/antd.css';
import fromBase from '../../ylang-demo-base/src/outer'
const {React, ReactDOM, lazyComponent} = fromBase

const App = lazyComponent(
    import(/* webpackChunkName: "page1" */ './index')
)

ReactDOM.render(
    <App />,
    document.getElementById('root'),
)