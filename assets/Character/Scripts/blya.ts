
import { _decorator, Component, Node, systemEvent, systemEventType, EventKeyboard, macro, Vec2, RigidBody2D, Collider2D, BoxCollider2D, Contact2DType, IPhysics2DContact, Label  } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('blya')
export class blya extends Component {
    @property ({type: Label})
    private scoreLabel : Label | null = null;
    private score;

    private collider: any;
    private rigidbody: any;
    private direction: number = 0;
    private walk_force: number = 1000;
    private node: any;
    private name: any;






    onLoad(){
        systemEvent.on(SystemEventType.KEY_DOWN, this.OnKeyDown(), this);
        systemEvent.on(SystemEventType.KEY_UP, this.OnKeyUp(), this);
    }

    start() {
        this.rigidbody = this.node.getComponent(RigidBody2D);
        this.rigidbody = this.node.getComponent(BoxCollider2D);

        if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.OnBeginContact, this);

        }
    }

    Update(deltaTime: number) {
        this.rigidbody.applyForceToCenter(new Vec2(this.direction * this.walk_force, 0), true)
    }

    OnBeginContact(selfCollider : BoxCollider2D, otherCollider : BoxCollider2D, contact: IPhysics2DContact | null ) {
        if (otherCollider == "star<BoxCollider2D>") {
            otherCollider.node.getComponent("Star").destroyStar();
            this.score++
            this.scoreLabel.string = "Score:" + this.score;
        }
    }














            }
        }


    }

