function EmptyPage({ data }) {
  return (
    <div className="mx-150 my-70  flex-col items-center justify-center h-screen">
      <img src="src/assets/empty_page.png"></img>
      <p className="text-3xl">{`No ${data}  found `}</p>
    </div>
  );
}

export default EmptyPage;
