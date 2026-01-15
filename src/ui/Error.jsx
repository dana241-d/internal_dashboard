function Error({ error }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-neutral-100">
      <p className="text-red-600 text-2xl flex items-center justify-center">
        {error} <span>🚫</span>
      </p>
    </div>
  );
}

export default Error;
