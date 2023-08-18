<h1>(02) Version Control and Branch Management</h1>

### Versioning
<p>Mengatur versi dari <em>source code</em> program.</p>

**Tools :**
<ol>
  <li>Version Control System (VCS)</li>
  <li>Source Code Manager (SCM)</li>
  <li>Revision Control System (RCS)</li>
</ol>

### GIT
<p>Git adalah salah satu <em>version control system</em> populer yang digunakan para <em>developer</em> untuk mengembangkan <em>software</em> secara bersama-sama. </p>

### Setting Up and Push
<ol type="A">
  <li>Setting Up</li>
    <ul>
    <li>Git Config</li>
    <p>Untuk melakukan konfigurasi pengaturan awal pada repository. Untuk menghubungkan alamat email, username pengguna pada git</p>
    <li>Git init</li>
    <p>Melakukan inisialisasi repository</p>
    <li>Git Clone</li>
    <p>Menduplikasi repository yang ada pada account github ke local storage yang ada di komputer kita.</p>
    </ul>

    ''' 
    #Git config
            
    $ git config --global user.name "John Doe"
    $ git config --global user.email "email@gmail.com"

    #Start with init
    $ git init
    $ git remote add <remote_name> <remote_repo_url>
    $ git push -u <remote_name> <local_branch_name>

    #Start with existing project, start working on the project
    $ git clone ssh://john@example.com/path/to/my-project.git
    $ cd my-project
    '''

  <li>Saving Changes</li>
    <ul>
    <li>Git add</li>
    <p>Untuk menambahkan <em>file</em></p>
    <li>Git commit</li>
    <p>Menambahkan pesan atau <em>message</em> pada file yang telah kita tambahkan</p>
    <li>Git status</li>
    <p>Untuk menampilkan status informasi pada repository</p>
    <li>Git diff</li>
    <p>Untuk mengetahui bagaimana perubahan yang terjadi di file yang telah di edit. </p>
    <li>Git stash</li>
    <p>Untuk menyimpan perubahan sementara.</p>
    </ul>

    ''' 
    $git add <directory>
    $git add hello.py
    $git add . 

    $git commit -m "message" -> menambahkan perubahan ke staging area

    $git status

    $git push origin <namabranch>
    '''

    # git diff
    # change file
    # add staging area
    $ git diff --staged

    # stashing ur work
    $ git stash

    # re-applying ur stashed changes
    $ git stash apply
    '''

  <li>Inspecting Repository and Undoing</li>
    <ul>
        <li>Git Log</li>
        <p>Untuk melihat riwayat commit.</p>
        <li>Git Checkout</li>
        <p>Untuk berpindah branch</p>
        <li>Git Reset</li>
        <p>Untuk menghapus commit.</p>
    </ul>

    '''
    # viewing an old revision
    $ git log --oneline, berfungsi untuk menampilkan setiap
    commit yang telah dilakukan. 

    $ git checkout, bisa digunakan untuk pindah versi dan branch.

    $ git reset "" --soft
    $ git reset "" --hard
    '''
  <li>Syncing</li>
  <ul>
        <li>Git Remote</li>
        <p>Untuk menghubungkan lokal dengan repository github</p>
        <li>Git Fetch</li>
        <p>Untuk mengambil perubahan terbaru pada repository tapi tidak otomatis digabung dengan lokal</p>
        <li>Git Pull</li>
        <p>Untuk menggabungkan perubahan yang terjadi dari repository ke lokal</p>
        <li>Git Push</li>
        <p>Untuk mengirimkan perubahan ke repository</p>
    </ul>

     '''
    # git remote
    $ git remote -v
    $ git remote add origin http://email.example.com/email.git

    # fetch and pull
    $ git fetch, untuk
    $ git pull origin master

    # push
    $ git push origin master
    $ git push origin feature/login-user
    '''
</ol>

### Branch 
<p>Branch adalah sebuah cabang yang berfungsi untuk melindungi main project agar dapat project dapat dikembangkan tanpa mengganggu main project.</p>

     '''
    # Show all branch
    $ git branch --list

    # create a new branch called <branch>
    $ git branch <branch>

    # force delete specified branch
    $ git branch -D <branch>

    # list remote branch
    $ git branch -a
    '''

**Git Merge** <br>
Untuk menggabungkan project dari 2 branch berbeda.




