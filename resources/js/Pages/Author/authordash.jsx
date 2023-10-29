import { useEffect } from 'react';
import AuthLayout from '@/Layouts/AuthLayout';
import InputError from '@/Components/AdminComponents/InputError';
import InputLabel from '@/Components/AdminComponents/InputLabel';
import PrimaryButton from '@/Components/AdminComponents/PrimaryButton';
import TextInput from '@/Components/AdminComponents/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

// import AuthorSidebar from '@/Components/AuthorComponents/AuthorSidebar';
import UploadNews from '@/Components/AuthorComponents/UploadNews';
import Footer from '@/Components/AdminComponents/Footer';

export default function AuthorDashboard({auth}) {
    // const { data, setData, post, processing, errors, reset } = useForm({
    //     heading: '',
    //     description: '',
    //     text: '',
    //     image: '',
    // });

    // const submit = (e) => {
    //     e.preventDefault();

    //     post(route('author.add_news'));
    // };

    return (
        <>
        

        <AuthLayout
         user={auth.user}
         header={
             <h2 className="font-semibold text-xl bg-secondary heading h-10 py-2 px-16 text-light leading-tight">
                 Dashboard
             </h2>
         }>
            <Head title="Add News" />

















            {/* <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="heading" value="Heading" />

                    <TextInput
                        id="heading"
                        name="heading"
                        value={data.heading}
                        className="mt-1 block w-full"
                        autoComplete="heading"
                        isFocused={true}
                        onChange={(e) => setData('heading', e.target.value)}
                        required
                    />

                    <InputError message={errors.heading} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="description" value="Description" />

                    <TextInput
                        id="description"
                        name="description"
                        value={data.description}
                        className="mt-1 block w-full"
                        autoComplete="description"
                        isFocused={true}
                        onChange={(e) => setData('description', e.target.value)}
                        required
                        />

                    <InputError message={errors.description} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="text" value="Text" />

                    <textarea 
                        id="text"
                        name="text"
                        value={data.text}
                        className="mt-1 block w-full"
                        autoComplete="text"
                        isFocused={true}
                        onChange={(e) => setData('text', e.target.value)}
                        required
                    />
                    <InputError message={errors.text} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="image" value="Chooose Image" />


                    <input
                        type="file"
                        id="image"
                        name="image"
                        value={data.image}
                        className="mt-1 block w-full"
                        autoComplete="image"
                        isFocused={true}
                        onChange={(e) => setData('image', e.target.value)}
                        required
                        />

                    <InputError message={errors.image} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                <PrimaryButton className="ml-4" disabled={processing}>
                    Add News
                </PrimaryButton>
                </div>

        </form> */}



<UploadNews/>

<Footer/>
        </AuthLayout >
                        </>
    );
}
