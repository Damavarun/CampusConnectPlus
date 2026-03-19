const setupAdmin = async () => {
  const res = await fetch('http://localhost:5000/api/auth/admin/setup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Super Admin',
      email: 'admin@college.edu',
      password: 'testpass'
    })
  });
  const data = await res.json();
  console.log(data);
};
setupAdmin();
