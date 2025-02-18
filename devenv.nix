{ pkgs, lib, config, ... }: {
  # https://devenv.sh/languages/
  languages = {
    javascript.enable = true;
    javascript.bun.enable = true;
    typescript.enable = true;
  };

  packages = [
    pkgs.nodePackages.wrangler
  ];

  dotenv.disableHint = true;

  tasks = {
    "install:deps" = {
      exec = ''
        bun install
        '';
      before = [ "devenv:enterShell" ];
    };
    "patch:deps" = {
      exec = ''
        if [ -f "./node_modules/@cloudflare/workerd-linux-64/bin/workerd" ]; then
          echo "Patching workerd binary"
          ${pkgs.patchelf}/bin/patchelf --set-interpreter "${pkgs.stdenv.cc.bintools.dynamicLinker}" ./node_modules/@cloudflare/workerd-linux-64/bin/workerd
        fi
      '';
      before = [ "devenv:enterShell" ];
      after = [ "install:deps" ];
    };
  };
}
