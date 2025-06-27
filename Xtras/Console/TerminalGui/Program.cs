using Terminal.Gui;

namespace TerminalGui;

public class Program
{
    static void Main()
    {
        Application.Init();
        var top = Application.Top;

        var ventanaPrincipal = new Window("Agenda")
        {
            X = 0,
            Y = 0,
            Width = Dim.Fill(),
            Height = Dim.Fill()
        };
        top.Add(ventanaPrincipal);

        var texto = new Label("Bienvenido")
        {
            X = Pos.Center(),
            Y = Pos.Center()
        };
        ventanaPrincipal.Add(texto);

        var barraDeEstado = new StatusBar(new StatusItem[]
        {
            new StatusItem(Key.F2, "~F2~ Añadir", () => Anyadir(top))
        });

        top.Add(barraDeEstado);


        Application.Run();
    }

    static void Anyadir(Toplevel top)
    {
        var ventanaAnyadir = new Window("Añadir")
        {
            X = 0,
            Y = 0,
            Width = Dim.Fill(),
            Height = Dim.Fill()
        };

        var etiquetaNombre = new Label("Nombre")
        {
            X = 2,
            Y = 2
        };

        var casillaNombre = new TextField("")
        {
            X = Pos.Right(etiquetaNombre) + 1,
            Y = etiquetaNombre.Y,
            Width = 30
        };

        var etiquetaDireccion = new Label("Direccion")
        {
            X = 2,
            Y = 4
        };

        var casillaDireccion = new TextField("")
        {
            X = Pos.Right(etiquetaDireccion) + 1,
            Y = etiquetaDireccion.Y,
            Width = 50
        };

        var botonAceptar = new Button("Aceptar")
        {
            X = Pos.Center(),
            Y = 6
        };

        botonAceptar.Clicked += () =>
        {
            MessageBox.Query(
                "Añadido",
                "Introducido: " + casillaNombre.Text +
                    " - " + casillaDireccion.Text,
                "Aceptar");
            top.Remove(ventanaAnyadir);
        };

        ventanaAnyadir.Add(etiquetaNombre, casillaNombre, etiquetaDireccion, casillaDireccion, botonAceptar);
        top.Add(ventanaAnyadir);
    }
}
