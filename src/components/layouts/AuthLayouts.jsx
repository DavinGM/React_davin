const AuthLayouts = ({ children, title }) => {
  return (
    <div className="w-full max-w-xs p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-2">{title}</h1>
      <p className="font-medium text-slate-500 mb-8">
        Selamat datang, masukkan detail Anda
      </p>
      {children}
    </div>
  );
};

export default AuthLayouts;
