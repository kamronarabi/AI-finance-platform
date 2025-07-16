import { getUserAccounts } from "@/actions/dashboard";
import { defaultCategories } from "@/data/categories";
import { AddTransactionForm } from "./_components/transaction-form";
import { getTransaction } from "@/actions/transaction";

export default async function AddTransactionPage({ searchParams }) {
  const accounts = await getUserAccounts();
  const { edit } = await searchParams;
  let initialData = null;
  if (edit) {
    const transaction = await getTransaction(edit);
    initialData = transaction;
  }

  return (
    <div className="max-w-3xl mx-auto px-5">
      <div className="flex justify-center md:justify-normal mb-8">
        <h1 className="text-5xl bg-gradient-to-br from-blue-600 to-purple-600 font-extrabold tracking-tighter pr-2 pb-2 text-transparent bg-clip-text ">{edit ? "Edit": "Add"} Transaction</h1>
      </div>
      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        editMode={!!edit}
        initialData={initialData}
      />
    </div>
  );
}