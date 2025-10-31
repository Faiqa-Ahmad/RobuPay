import Header from '../components/Header';

export default function BusinessLayout({ children }) {
  return (
    <div className="bg-[#F0F7EB] ">
      <Header />
      <div className="pt-28">
        {children}
      </div>
      
    </div>
  );
}

