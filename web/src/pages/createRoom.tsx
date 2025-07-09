import { Link } from 'react-router-dom';
export function CreateRoom() {
  return (
    <div>
      <div>CreateRoom</div>

      <Link className="underline" to="/room">
        acessar sala
      </Link>
    </div>
  );
}
