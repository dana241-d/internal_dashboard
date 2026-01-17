// return (
//   <>
//     {/* Mobile Overlay */}
//     {isOpen && (
//       <div
//         className="fixed inset-0 bg-neutral-500 bg-opacity-50 z-30 md:hidden"
//         onClick={() => setIsOpen(false)}
//       />
//     )}

//     {/* Sidebar */}
//     <aside
//       className={`fixed top-0 left-0 z-40 h-full w-64 bg-neutral-500 text-white transform transition-transform
//         ${isOpen ? "translate-x-0" : "-translate-x-full"}
//         md:translate-x-0 md:static md:h-auto md:flex md:flex-col`}
//     >
//       {/* Close button on mobile */}
//       <div className="flex justify-end p-4 md:hidden">
//         <button onClick={() => setIsOpen(false)}>
//           <XIcon className="w-6 h-6" />
//         </button>
//       </div>

//       {/* Header / Logo */}
//       <SidebarHeader className="h-40 px-6 py-4 text-2xl font-bold border-b border-gray-700">
//         <Link to="/users">
//           <img src="src/assets/download.png" alt="Logo" className="h-12" />
//         </Link>
//       </SidebarHeader>

//       {/* Content */}
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {links.map((link) => {
//                 const isActive = location.pathname === link.to;
//                 return (
//                   <SidebarMenuItem
//                     key={link.title}
//                     onClick={() => {
//                       setIsOpen(false);
//                       link.to === "/logout" ? logoutLogic() : usersLogic();
//                     }}
//                     className={`h-20 mb-5 flex items-center justify-center rounded-2xl
//                       bg-white hover:bg-neutral-400 ${
//                         isActive ? "bg-neutral-400" : ""
//                       }`}
//                   >
//                     <link.icon className="mr-2" />
//                     <span>{link.title}</span>
//                   </SidebarMenuItem>
//                 );
//               })}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>

//       <SidebarFooter className="mt-auto" />
//     </aside>
//   </>
// );
