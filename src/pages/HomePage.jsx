import axios from 'axios';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [user, setuser] = useState();
  // undefind
  // token
  let domain = 'http://82.112.241.233:1993';
  let endPoint = '/api/users/me';
  let url = domain + endPoint;

  useEffect(() => {
    let token = localStorage.getItem('token') || sessionStorage.getItem('token');
    let basmga = { headers: { Authorization: `Bearer ${token}` } };
    axios
      .get(url, basmga)
      .then((res) => {
        setuser(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="w-full h-full overflow-auto">
      <h1>Welcome {user?.username}</h1>
    </div>
  );
}
