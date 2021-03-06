import bcrypt from 'bcryptjs';
export const data = {
    users: [
        {
            name: 'Administrator',
            surname: 'A',
            email: 'admin@admin.com',
            password: bcrypt.hashSync('admin', 8),
            address: 'Prosta 6',
            city: 'Gliwice',
            state: 'śląskie',
            zip: '44-003',
            acceptedRules: true,
            isAdmin: true,
        },
        {
            name: 'User',
            surname: 'U',
            email: 'user@user.com',
            password: bcrypt.hashSync('user', 8),
            address: 'Prosta 6',
            city: 'Gliwice',
            state: 'śląskie',
            zip: '44-003',
            acceptedRules: true,
            isAdmin: false,
        }
    ],
    products: [
        {
            name: 'Product 1',
            image: '../../../images/pexels-markus-spiske-1002635.jpg',
            image1: '../../../images/pexels-markus-spiske-2.jpg',
            price: 121,
            category: 'Technologia',
            thumbnail: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst quisque sagittis purus sit amet. Venenatis cras sed felis eget velit aliquet sagittis. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Vel pharetra vel turpis nunc eget. Vitae justo eget magna fermentum iaculis eu non diam. Nulla aliquet enim tortor at auctor urna nunc id cursus. Nibh tellus molestie nunc non blandit massa. Diam maecenas ultricies mi eget mauris pharetra et. Ut etiam sit amet nisl purus in mollis nunc. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Ipsum a arcu cursus vitae congue. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a. Nunc sed id semper risus. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Euismod elementum nisi quis eleifend.',
            countInStock: 0,
        },
        {
            name: 'Product 2',
            category: 'Technologia',
            image: '../../../images/pexels-pixabay-51383.jpg',
            image1: '../../../images/pexels-pixabay-51383_2.jpg',
            price: 122,
            thumbnail: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Mauris commodo quis imperdiet massa tincidunt nunc. At urna condimentum mattis pellentesque. Ut placerat orci nulla pellentesque dignissim enim. Morbi tristique senectus et netus et malesuada. Fermentum et sollicitudin ac orci phasellus egestas. Risus feugiat in ante metus dictum. Pretium fusce id velit ut tortor pretium. Netus et malesuada fames ac turpis egestas sed. Tincidunt ornare massa eget egestas purus. In tellus integer feugiat scelerisque varius morbi enim nunc. Leo a diam sollicitudin tempor id eu. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Viverra nam libero justo laoreet sit amet cursus. Consectetur a erat nam at lectus urna. Quis ipsum suspendisse ultrices gravida. Sit amet cursus sit amet dictum sit amet justo.',
            countInStock: 100,
        },
        {
            name: 'Product 3',
            image: '../../../images/pexels-tirachard-kumtanom-733853.jpg',
            image1: '../../../images/pexels-tirachard-kumtanom-733853_2.jpg',
            price: 123,
            category: 'Technologia',
            thumbnail: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ultrices sagittis orci a. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Enim facilisis gravida neque convallis a cras. Libero enim sed faucibus turpis. Et netus et malesuada fames. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. At lectus urna duis convallis convallis tellus. Malesuada fames ac turpis egestas maecenas. Adipiscing elit duis tristique sollicitudin nibh. Malesuada fames ac turpis egestas. Sit amet consectetur adipiscing elit duis tristique sollicitudin. Ac turpis egestas integer eget aliquet nibh praesent tristique. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Vitae turpis massa sed elementum tempus egestas sed sed. Arcu cursus vitae congue mauris.',
            countInStock: 100,
        },
        {
            name: 'Product 4',
            image: '../../../images/pexels-laryssa-suaid-4678952.jpg',
            image1: '../../../images/pexels-khwanchai-phanthong-4175020.jpg',
            price: 124,
            category: 'Pielęgnacja',
            thumbnail: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur purus ut faucibus pulvinar elementum integer enim. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Enim nulla aliquet porttitor lacus. Aliquet enim tortor at auctor urna nunc id cursus. Viverra nibh cras pulvinar mattis nunc. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Accumsan tortor posuere ac ut consequat semper viverra nam. In ornare quam viverra orci sagittis eu volutpat. Ac odio tempor orci dapibus ultrices in. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Faucibus ornare suspendisse sed nisi lacus. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Viverra maecenas accumsan lacus vel facilisis volutpat. Sit amet dictum sit amet justo. Dolor sed viverra ipsum nunc aliquet. Nibh praesent tristique magna sit amet purus gravida quis blandit. Amet massa vitae tortor condimentum.',
            countInStock: 100,
        },
        {
            name: 'Product 5',
            image: '../../../images/pexels-castorly-stock-3872908.jpg',
            image1: '../../../images/pexels-castorly-stock-3872903.jpg',
            price: 125,
            category: 'Pielęgnacja',
            thumbnail: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique magna sit amet purus gravida quis blandit turpis. Eu facilisis sed odio morbi quis. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Sagittis orci a scelerisque purus semper eget duis at tellus. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Sed lectus vestibulum mattis ullamcorper. Tincidunt arcu non sodales neque sodales ut etiam. Commodo sed egestas egestas fringilla. Rhoncus aenean vel elit scelerisque mauris. Purus semper eget duis at tellus at urna condimentum. Id diam vel quam elementum pulvinar etiam non quam. Quis lectus nulla at volutpat diam ut. Ac turpis egestas maecenas pharetra convallis posuere morbi. Sed adipiscing diam donec adipiscing tristique risus. Turpis nunc eget lorem dolor. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Sollicitudin tempor id eu nisl nunc mi ipsum.',
            countInStock: 100,
        },
        {
            name: 'Product 6',
            image: '../../../images/pexels-karolina-grabowska-4041392.jpg',
            image1: '../../../images/pexels-karolina-grabowska-4202926.jpg',
            price: 126,
            category: 'Pielęgnacja',
            thumbnail: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget. Interdum varius sit amet mattis vulputate. In hac habitasse platea dictumst vestibulum. Sed turpis tincidunt id aliquet risus. Pellentesque massa placerat duis ultricies lacus sed turpis. Urna molestie at elementum eu facilisis sed odio morbi quis. Diam sit amet nisl suscipit adipiscing. Potenti nullam ac tortor vitae purus. Vestibulum lorem sed risus ultricies tristique. Enim ut sem viverra aliquet eget. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa.',
            countInStock: 100,
        },
        {
            name: 'Product 7',
            image: '../../../images/pexels-karolina-grabowska-4464488.jpg',
            image1: '../../../images/pexels-leah-kelley-373465.jpg',
            price: 127,
            category: 'Książki',
            thumbnail: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed. In vitae turpis massa sed elementum tempus egestas. Quis vel eros donec ac odio tempor orci. Diam quis enim lobortis scelerisque. Tincidunt id aliquet risus feugiat. Non tellus orci ac auctor. Accumsan tortor posuere ac ut consequat semper viverra. Arcu dui vivamus arcu felis bibendum ut tristique et. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Lacinia quis vel eros donec ac odio tempor orci. Tortor consequat id porta nibh venenatis cras sed felis. Lorem dolor sed viverra ipsum nunc aliquet. Scelerisque in dictum non consectetur a erat nam. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Ipsum dolor sit amet consectetur adipiscing elit. Maecenas sed enim ut sem viverra aliquet eget sit amet. Consequat nisl vel pretium lectus quam. Eu lobortis elementum nibh tellus molestie.',
            countInStock: 100,
        },
        {
            name: 'Product 8',
            image: '../../../images/pexels-polina-tankilevitch-4522998.jpg',
            image1: '../../../images/pexels-jeshoots-21067.jpg',
            price: 128,
            category: 'Technologia',
            thumbnail: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum suspendisse ultrices gravida dictum fusce. Vitae nunc sed velit dignissim sodales ut. Pellentesque diam volutpat commodo sed egestas. Vitae aliquet nec ullamcorper sit amet risus. In cursus turpis massa tincidunt dui ut ornare. Interdum consectetur libero id faucibus nisl tincidunt. Feugiat nibh sed pulvinar proin. Augue mauris augue neque gravida in fermentum et. Morbi non arcu risus quis varius quam quisque. Interdum velit euismod in pellentesque massa. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Aenean sed adipiscing diam donec. Penatibus et magnis dis parturient montes. Neque egestas congue quisque egestas diam. Ultrices vitae auctor eu augue ut lectus. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Quis blandit turpis cursus in hac.',
            countInStock: 100,
        },
        {
            name: 'Product 9',
            image: '../../../images/pexels-emma-bauso-2253833.jpg',
            image1: '../../../images/pexels-emma-bauso-2253832.jpg',
            price: 129,
            category: 'Kosmetyki',
            thumbnail: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et. Tortor posuere ac ut consequat semper viverra nam libero. Amet massa vitae tortor condimentum lacinia quis vel. Etiam sit amet nisl purus in mollis nunc sed. In cursus turpis massa tincidunt dui ut ornare lectus. Ut aliquam purus sit amet luctus venenatis lectus magna. Lacus laoreet non curabitur gravida arcu. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Consequat interdum varius sit amet mattis vulputate enim. Eu consequat ac felis donec et odio pellentesque diam. Fermentum leo vel orci porta non pulvinar neque. Suspendisse ultrices gravida dictum fusce ut. Egestas erat imperdiet sed euismod nisi. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Consectetur adipiscing elit duis tristique sollicitudin. Porta lorem mollis aliquam ut porttitor leo a. Dui nunc mattis enim ut. Aenean pharetra magna ac placerat vestibulum lectus. Cursus in hac habitasse platea dictumst quisque.',
            countInStock: 100,
        },
        {
            name: 'Product 10',
            image: '../../../images/pexels-dominika-roseclay-912950.jpg',
            image1: '../../../images/pexels-karolina-grabowska-4465127.jpg',
            price: 130,
            category: 'Kosmetyki',
            thumbnail: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Nec nam aliquam sem et tortor. Molestie nunc non blandit massa enim nec dui nunc mattis. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Molestie at elementum eu facilisis sed odio morbi quis commodo. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Neque vitae tempus quam pellentesque nec nam aliquam sem. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Ut ornare lectus sit amet est placerat in. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Penatibus et magnis dis parturient montes nascetur ridiculus. Iaculis eu non diam phasellus vestibulum lorem. Lectus nulla at volutpat diam ut venenatis. Id diam vel quam elementum pulvinar etiam. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Ac tortor dignissim convallis aenean et tortor. Mattis rhoncus urna neque viverra.',
            countInStock: 100,
        }
    ],
}