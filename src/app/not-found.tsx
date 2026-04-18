
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-700 text-blue-700">
      <div className="text-center">
        <img className="md:w-100 w-70" src="/error-brain-not-found.gif" alt="404 not found"/>
        <h1 className="text-3xl font-bold">404</h1>
        <p className="mt-2">Page not found</p>
      </div>
    </div>
  );
}