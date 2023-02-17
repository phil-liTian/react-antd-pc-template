import TypingCard from '@c/TypingCard'

const content =
  '引导页对于一些第一次进入项目的<a>人</a>很有用，你可以简单介绍下项目的功能。本Demo是基于driver.js'
const Login = () => {
  return (
    <div>
      <TypingCard source={content} />
    </div>
  )
}

export default Login
