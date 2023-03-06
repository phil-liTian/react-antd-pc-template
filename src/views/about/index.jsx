import TypingCard from '@c/TypingCard'

const AboutContent = `
  <p>怒发冲冠，凭栏处、潇潇雨歇。</p>
  <p>抬望眼、仰天长啸，壮怀激烈。</p>
  <p>三十功名尘与土，八千里路云和月。</p>
  <p>莫等闲、白了少年头，空悲切。</p>
  <p>靖康耻，犹未雪。臣子恨，何时灭。驾长车，踏破贺兰山缺。</p>
  <p>壮志饥餐胡虏肉，笑谈渴饮匈奴血。</p>
  <p>待从头、收拾旧山河，朝天阙。</p>
`

const About = () => {
  return (
    <div>
      <TypingCard title='关于作者' source={AboutContent}></TypingCard>
    </div>
  )
}

export default About
