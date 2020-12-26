const { ccclass, property, requireComponent } = cc._decorator;

@ccclass
@requireComponent(cc.BlockInputEvents)
export default class Helloworld extends cc.Component {
  @property(cc.Label)
  label: cc.Label = null;

  @property
  text: string = 'hello';

  start() {
    // init logic
    this.label.string = this.text;
  }

  update(dt: number) {
    this.label.node.angle += 1;
  }
}
