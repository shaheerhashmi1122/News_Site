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
import NewsTable from '@/Components/AuthorComponents/NewsTable';
import axios from 'axios';

export default function tables({auth}) {


 

    return (
        <>
        

   <AuthLayout auth={auth}>
<NewsTable/>
   </AuthLayout>
                        </>
    );
}
