import Counter from './Counter';
import ServerComponent from './ServerComponent';

export default function Composition() {
  return (
    <div>
      <div>Composition</div>
      <Counter>
        <ServerComponent />
      </Counter>
    </div>
  );
}
