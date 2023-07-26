const OrdersPage = () => {
  return (
    <div className="p-4 md:px-20 xl:px-40 mx-auto">
      <table className="border-separate border-spacing-3 w-full">
        <thead>
          <tr className="text-sm text-left">
            <th className="hidden md:block">Order Id</th>
            <th>Date</th>
            <th>price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" text-sm bg-red-100">
            <td className="hidden md:block py-4 px-1">013113223232322</td>
            <td className="py-4 px-1">20-07-2023</td>
            <td className="py-4 px-1">$90.95</td>
            <td className=" py-4 px-1 hidden md:block">
              1L Cocacola, Burger(Large) x 2, Pizza (small) x 2
            </td>
            <td className="text-black font-medium py-4 px-1 bg-yellow-400">
              On the way(approx. 10 mins)
            </td>
          </tr>
          <tr className=" text-sm bg-slate-100 odd:bg-slate-50">
            <td className="hidden md:block py-4 px-1">013113223232322</td>
            <td className="py-4 px-1">20-07-2023</td>
            <td className="py-4 px-1">$90.95</td>
            <td className=" py-4 px-1 hidden md:block">
              1L Cocacola, Burger(Large) x 2, Pizza (small) x 2
            </td>
            <td className="uppercase text-white font-medium py-4 px-1 bg-teal-500">
              Delivered
            </td>
          </tr>
          <tr className=" text-sm bg-slate-100 odd:bg-slate-200">
            <td className="hidden md:block py-4 px-1">013113223232322</td>
            <td className="py-4 px-1">20-07-2023</td>
            <td className="py-4 px-1">$90.95</td>
            <td className=" py-4 px-1 hidden md:block">
              1L Cocacola, Burger(Large) x 2, Pizza (small) x 2
            </td>
            <td className="uppercase text-white font-medium py-4 px-1 bg-slate-500">
              cancel
            </td>
          </tr>
          <tr className=" text-sm bg-slate-100 odd:bg-slate-200">
            <td className="hidden md:block py-4 px-1">013113223232322</td>
            <td className="py-4 px-1">20-07-2023</td>
            <td className="py-4 px-1">$90.95</td>
            <td className=" py-4 px-1 hidden md:block">
              1L Cocacola, Burger(Large) x 2, Pizza (small) x 2
            </td>
            <td className="text-white font-medium bg-red-500 py-4 px-1 uppercase ">
              Refund
            </td>
          </tr>
          <tr className=" text-sm bg-slate-100 odd:bg-slate-200">
            <td className="hidden md:block py-4 px-1">013113223232322</td>
            <td className="py-4 px-1">20-07-2023</td>
            <td className="py-4 px-1">$90.95</td>
            <td className=" py-4 px-1 hidden md:block">
              1L Cocacola, Burger(Large) x 2, Pizza (small) x 2
            </td>
            <td className="text-white font-medium bg-red-500 py-4 px-1 uppercase ">
              Refund
            </td>
          </tr>
          <tr className=" text-sm bg-slate-100 odd:bg-slate-200">
            <td className="hidden md:block py-4 px-1">013113223232322</td>
            <td className="py-4 px-1">20-07-2023</td>
            <td className="py-4 px-1">$90.95</td>
            <td className=" py-4 px-1 hidden md:block">
              1L Cocacola, Burger(Large) x 2, Pizza (small) x 2
            </td>
            <td className="text-white font-medium bg-red-500 py-4 px-1 uppercase ">
              Refund
            </td>
          </tr>
          <tr className=" text-sm bg-slate-100 odd:bg-slate-200">
            <td className="hidden md:block py-4 px-1">013113223232322</td>
            <td className="py-4 px-1">20-07-2023</td>
            <td className="py-4 px-1">$90.95</td>
            <td className=" py-4 px-1 hidden md:block">
              1L Cocacola, Burger(Large) x 2, Pizza (small) x 2
            </td>
            <td className="text-white font-medium bg-teal-500 py-4 px-1 uppercase ">
              Delivered
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
